import axios from 'axios';

const baseURL = '';

function getHeaders() {
    return {
        Accept: 'application/json',
    };
}

// 전체 디렉토리 구조 조회
export function getDirectories() {
    const params = {
    };
    const headers = getHeaders();
    const url = `${baseURL}/directories`;
        return new Promise((resolve, reject) => {
        axios.get(url, { params, headers })
          .then((response) => {
            resolve(response);
          })
          .catch((e) => {
            reject(e);
          });
    });
}

// 실제 컨텐츠 목록 조회(업데이트 순 내림차순 정렬)
export function getContents() {
    const params = {
    };
    const headers = getHeaders();
    const url = `${baseURL}/contents`;
        return new Promise((resolve, reject) => {
        axios.get(url, { params, headers })
          .then((response) => {
            resolve(response);
          })
          .catch((e) => {
            reject(e);
          });
    });
}

// export function getItems() {
//     const params = {
//         // pageNum: 1
//     };
//     const headers = getHeaders();
//     const url = `${baseURL}/items`;
//     return new Promise((resolve, reject) => {
//         axios.get(url, { params, headers })
//           .then((response) => {
//             // const items = response.data.response.body.docs;
//             // const dictionaries = items.map((item) => getDictionary(item));
//             resolve(response);
//           })
//           .catch((e) => {
//             reject(e);
//           });
//     });
// }

// export function createItem(data) {
//     const headers = getHeaders();
//     const url = `${baseURL}/item`;
//     const body = {
//         ...data
//     }
//     return new Promise((resolve, reject) => {
//         axios.post(url, body, { headers })
//             .then((response) => {
//                 resolve(response)
//             })
//             .catch((e) => {
//                 reject(e)
//             })
//     })
// }

// export function modifyItem(itemId, data) {
//     const headers = getHeaders();
//     const url = `${baseURL}/item/${itemId}`;
//     const body = {
//         ...data
//     }
//   return new Promise((resolve, reject) => {
//     axios.put(url, body, { headers })
//       .then((response) => {
//         resolve(response);
//       })
//       .catch((e) => {
//         reject(e)
//       })
//   })
// }

// export function removeItem(itemId) {
//     const headers = getHeaders();
//     const url = `${baseURL}/item/${itemId}`;

//     return new Promise((resolve, reject) => {
//         axios.delete(url, { headers })
//           .then((response) => {
//             resolve(response);
//           })
//           .catch((e) => {
//             reject(e)
//           })
//     })
// }