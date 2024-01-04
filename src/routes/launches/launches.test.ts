// import http from 'node:http';
// import {
//   assertEquals,
//   assertStringIncludes,
//   axios,
//   describe,
//   it
// } from '@/dev_deps';
// import app from '@/src/app.ts';

// const PORT = 675;
// let server: http.Server | null;
// const instance = axios.create({
//   baseURL: `http://localhost:${PORT}`
// });

// function startServer() {
//   server = http.createServer(app);
//   server.listen(PORT);
// }

// async function stopServer() {
//   if (server) {
//     server.close();
//     await new Promise((resolve) => server!.on('close', resolve));
//   }
// }

// describe({
//   name: 'Test GET /launches',
//   fn() {
//     it('it should respond with 200 success', async () => {
//       const response = await instance.get('/launches');
//       assertStringIncludes(
//         response.headers['Content-Type']?.toLocaleString(),
//         'json'
//       );
//       assertEquals(response.status, 200);
//     });

//     it('it should catch missing required properties 0', () => {});
//   },
//   beforeAll() {
//     startServer();
//   },
//   async afterAll() {
//     await stopServer();
//   },
//   sanitizeOps: false,
//   sanitizeResources: false
// });

// describe('Test POST /launch', () => {
//   it('it should respond with 200 success', () => {});

//   it('it should catch missing required properties', () => {});

//   it('it should catch invalid dates', () => {});
// });
