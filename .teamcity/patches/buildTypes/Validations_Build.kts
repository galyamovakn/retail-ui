package patches.buildTypes

import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.ui.*

/*
This patch script was generated by TeamCity on settings change in UI.
To apply the patch, change the buildType with id = 'Validations_Build'
accordingly, and delete the patch script.
*/
changeBuildType(RelativeId("Validations_Build")) {
    expectSteps {
        step {
            name = "Install"
            type = "jonnyzzz.yarn"
            param("yarn_commands", "install")
        }
        step {
            name = "Build"
            type = "jonnyzzz.yarn"
            param("yarn_commands", "workspace react-ui-validations build")
        }
        step {
            name = "PreDeploy"
            type = "jonnyzzz.yarn"
            param("yarn_commands", "workspace react-ui-validations predeploy")
        }
        step {
            name = "Pack react-ui-validations"
            type = "jonnyzzz.yarn"
            param("yarn_commands", "workspace react-ui-validations --cwd ./build/retail-ui-dist/ pack --filename react-ui-validations-%build.counter%.tgz")
        }
        step {
            name = "Pack @skbkontur/react-ui-validations"
            type = "jonnyzzz.yarn"
            param("yarn_commands", "workspace react-ui-validations --cwd ./build/react-ui-dist/ pack --filename skbkontur-react-ui-validations-%build.counter%.tgz")
        }
    }
    steps {
        insert(3) {
            step {
                name = "Check pack files"
                type = "jonnyzzz.yarn"
                param("yarn_commands", """workspace react-ui-validations test:pack --testResultsProcessor="jest-teamcity-reporter"""")
            }
        }
    }
}