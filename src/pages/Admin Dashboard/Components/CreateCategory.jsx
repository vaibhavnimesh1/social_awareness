// const handleCreateCategory = async () => {
//   try {
//     const formData = new FormData();
//     formData.append("title", "Test Cause 1");
//     formData.append("description", "Test Cause 1 description");
//     formData.append("categoryId", "663877b192abc3d97dd067c4");
//     formData.append(
//       "image",
//       "/Users/navneetsingh/Desktop/Screenshot 2024-05-06 at 12.08.17 PM.png"
//     );

//     const response = await axios.post(`${BASE_URL}/createCause`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (response?.data?.success) {
//       fetchCauses(); 
//     }
//   } catch (error) {
//     console.error("Error creating cause:", error);
//   }
// };

