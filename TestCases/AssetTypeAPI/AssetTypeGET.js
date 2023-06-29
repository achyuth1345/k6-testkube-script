import{ sleep } from 'k6';
import http from 'k6/http';
// import * as variables from '../../Config/AssetTypeConfig.js';

export let options = {
    duration : '30s',
    vus : 5,
};
const Url=variables.default.AssetTypeGET_baseUrl;
const queryparams=variables.default.AssetTypeGET_queryparams;
export default function() {
    // const response=http.get('https://rego-dev-api.dovertech.co.in/assetmanagement/api/v1/assettype',queryparams);
    console.log('status Code:${response.status}');
  }
