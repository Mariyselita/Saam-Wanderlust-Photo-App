window._config = {
    cognito: {
    userPoolId: 'us-east-1_cVkJfbijV', // e.g. us-east-2_uXboG5pAb
    userPoolClientId: '18283niua2nl4abq24d3va9lt6', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-east-1', // e.g. us-east-1
    identityPoolId: 'us-east-1:534a48c4-2eb2-4594-8c3e-8d59106ff557' // e.g. us-east-1:510eda3c-8339-6b01-2238-7de36aab7ca0
    },
    api: {
      invokeUrl: 'https://gg58hyer0i.execute-api.us-east-1.amazonaws.com/prod/photos' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod/photos',
    },
    s3: {
      bucket: 'saamwanderlust-marisela', // e.g. mynewbucket
      hostUrl: 'http://saamwanderlust-marisela.s3-website-us-east-1.amazonaws.com', // e.g. http://mynewbucket.s3-website-us-east-1.amazonaws.com
      uploadPath : 'uploads/'
    },
    dynamodb: {
      tableName: 'SaamWanderlustPhotos'
    }
};
