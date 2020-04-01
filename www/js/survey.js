angular.module('emission.main.survey', [])
.controller('SurveyCtrl', function($scope, $state) {
    console.log('DEBUGDEBUG: made it HERE.')

    $stateProvider
    .state('root.main.survey', {
        url: '/survey',
        views: {
            'main-survey': {}
        }
    })
});