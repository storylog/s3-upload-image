import Aws from 'aws-sdk';
import sharp from 'sharp';
import randomstring from 'randomstring';

let s3 = null;

const ResizeImage = async (buffer) => {
  const newBuffer = await sharp(buffer.data).toBuffer();
  return newBuffer;
};

const decodeBase64Image = (dataString) => {
  /* eslint-disable no-useless-escape */
  const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  /* eslint-enable no-useless-escape */
  const response = {};

  if (matches.length !== 3) {
    throw new Error('Invalid input string');
  }

  if (!/image\/(png|jpg|jpeg)/.test(matches[1])) {
    throw new Error('Type is not support');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
};

const init = (config) => {
  // if (!config) throw new Error('Please input config S3');
  s3 = new Aws.S3(config);
};

const uploadImage = async (data, destination) => {
  console.log(s3.config);
  const imageBuffer = decodeBase64Image(data);
  const bufferImageResize = await ResizeImage(imageBuffer);

  const params = {
    Bucket: destination,
    Key: randomstring.generate(15),
    Body: bufferImageResize,
  };
  try {
    const infoUpload = await s3.upload(params).promise();
    return infoUpload.Location;
  } catch (error) {
    throw new Error('Cannot upload image');
  }
};

export default {
  init,
  uploadImage,
};
