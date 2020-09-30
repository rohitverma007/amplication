import { ConfigModule, ConfigService } from '@nestjs/config';
import { BuilderModule } from 'amplication-container-builder/dist/nestjs';
import { DockerProvider } from 'amplication-container-builder/dist/docker';
import { CloudBuildProvider } from 'amplication-container-builder/dist/cloud-build';
import Docker from 'dockerode';
import { CloudBuildClient } from '@google-cloud/cloudbuild';

export const DOCKER_BUILD_PROVIDER_VAR = 'DOCKER_BUILD_PROVIDER';
export const APPS_GCP_PROJECT_ID_VAR = 'APPS_GCP_PROJECT_ID';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ContainerBuilderRootModule = BuilderModule.forRootAsync({
  useFactory: (configService: ConfigService) => {
    const dockerBuildProvider = configService.get(DOCKER_BUILD_PROVIDER_VAR);
    const appsGCPProjectId = configService.get(APPS_GCP_PROJECT_ID_VAR);
    return {
      default: dockerBuildProvider,
      providers: {
        docker: new DockerProvider(new Docker()),
        cloudBuild: new CloudBuildProvider(
          new CloudBuildClient(),
          appsGCPProjectId
        )
      }
    };
  },
  inject: [ConfigService],
  imports: [ConfigModule]
});
