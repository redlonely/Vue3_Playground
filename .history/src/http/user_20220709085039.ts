// import http from '@/http'
// // import type { UserInfo } from '@/types'

// // 获取用户列表
// const getUserList = (query?: object): Promise<Array<any>> => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = (await http.get({
//         url: '/api/user/list',
//         // params: JSON.stringify(query),
//       })) as any
//       res.data && resolve(res.data.users)
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

// // 添加用户
// const insertUser = (user: UserInfo) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = (await http.post({
//         url: '/api/user/insert',
//         // params: JSON.stringify(query),
//         data: { ...user },
//       })) as any
//       console.log(res)
//       resolve({})
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

// // 删除用户
// const deleteUser = (_id: string) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const res = (await http.post({
//         url: '/api/user/real_del',
//         data: { _id },
//       })) as any
//       console.log(res)
//       resolve({})
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

// // 更新用户
// // const updateUser = (_id: string | undefined, user: UserInfo) => {
// //   return new Promise(async (resolve, reject) => {
// //     try {
// //       const res = (await http.post({
// //         url: '/api/user/update',
// //         data: { _id, userinfo: { ...user } },
// //       })) as any
// //       console.log(res)
// //       resolve({})
// //     } catch (error) {
// //       reject(error)
// //     }
// //   })
// // }

// export { getUserList, insertUser, deleteUser, updateUser }
