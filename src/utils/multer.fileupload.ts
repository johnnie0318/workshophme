import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';

export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const editFileName = (req, file, callback) => {
  callback(null, `${uuidv4()}${extname(file.originalname)}`);
};
