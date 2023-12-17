// test.ts

import path from 'path';
import fs from 'fs';
import { MockMethod, MockConfig } from 'vite-plugin-mock';
export default [
  {
    // mock响应返回图片类型数据
    url: '/api/image',
    method: 'get',
    rawResponse: async (req: any, res: any) => {
      const imagePath = path.join(__dirname, 'img1.png');

      fs.readFile(imagePath, (err, data) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Error:unable to read image file.');
        } else {
          // res.setHeader('Content-Type', 'image/jpeg');
          // res.statusCode = 200;
          res.writeHead(200, {
            'Content-Type': 'image/jpeg'
          });
          res.end(data); // 将图片文件的二进制数据发送给客户端
        }
      });
    }
  },
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben'
        }
      };
    }
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben'
      }
    }
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    }
  }
] as MockMethod[];
