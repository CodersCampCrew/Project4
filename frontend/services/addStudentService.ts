import serverAPI from "./serverAPI";

const addStudentService = {
  async addStudent(addStudentData: {
    studentName: string;
    parentName: string;
    kinship: string;
    studentEmail: string;
    studentPhone: number;
    parentPhone: number;
    schoolType: string;
    class: string;
    localization: string;
    prizeTime: string;
    prize: string;
    address: string;
    isLessonRegular: boolean;
    lessons: Object[];
  }) {
    const data = await serverAPI.post({
      url: "appointment/create",
      data: addStudentData,
    });

    return data;
  },
};

export default addStudentService;
