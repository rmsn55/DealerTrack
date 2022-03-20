import axios from "axios";

export const importFile = async (csvFile) => {
  const formData = new FormData();
  formData.append("file", csvFile);
  try {
    const response = await axios.post(
      "https://localhost:5001/api/importfile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    if (response.status === 200) {
      const { data } = response;
      return data;
    }
  } catch (ex) {
    console.log(ex);
  }
};
