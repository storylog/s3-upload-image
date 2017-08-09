import Aws from 'aws-sdk';
import sharp from 'sharp';

let s3 = null;

const decodeBase64Image = (dataString) => {
  /* eslint-disable no-useless-escape */
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  /* eslint-enable no-useless-escape */
  const response = {};

  if (matches.length !== 3) {
    throw new Error('Invalid input string');
  }

  if (!/image\/(png|jp?g)/.test(matches[1])) {
    throw new Error('Type is not support');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
};

const init = (config) => {
  if (!config) throw new Error('Please input config S3');
  s3 = new Aws.S3(config);
};

const uploadImage = async (data, filename, destination) => {
  const imageBuffer = decodeBase64Image(data);
  const bufferImageResize = await sharp(imageBuffer.data).rotate().resize(100).toBuffer();

  const params = {
    Bucket: destination,
    Key: `${filename || Math.floor(Math.random() * 100000)}.${imageBuffer.type.split('/')[1]}`,
    Body: bufferImageResize,
  };
  const infoUpload = await s3.upload(params).promise();
  return infoUpload.Location;
};

export default {
  init,
  uploadImage,
};
