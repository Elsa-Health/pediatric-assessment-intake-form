import Constants from 'expo-constants';

export function getEnvironment() {
  const releaseChannel = Constants.manifest.releaseChannel;

  if (releaseChannel === undefined) {
    // no releaseChannel (is undefined) in dev
    return { envName: 'DEVELOPMENT', url:"https://webhooks.mongodb-realm.com/api/client/v2.0/app/pediatirc_data_collection_form-riwjd/service/handleFormData/incoming_webhook/insertDataIntoCollection" }; // dev env settings
  }
  if (releaseChannel.indexOf('prod') !== -1) {
    // matches prod-v1, prod-v2, prod-v3
    return { envName: 'PRODUCTION', url:"" }; // prod env settings
  }
  if (releaseChannel.indexOf('staging') !== -1) {
    // matches staging-v1, staging-v2
    return { envName: 'STAGING', url:""}; // stage env settings
  }
}