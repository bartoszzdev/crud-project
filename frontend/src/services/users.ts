import http from "../http";

export interface IUserData {
  _id?: string;
  name: string;
  job: string;
  phone: string;
  email: string;
}

class UsersDataService {
  getAllUsers() {
    return http.get("/");
  }

  createNewUser(data: IUserData) {
    return http.post("/", data);
  }

  deleteUser(id: string) {
    return http.delete(`/${id}`);
  }

  getSingleUser(id: string) {
    return http.get(`/${id}`);
  }

  updateUser(id: string, data : IUserData) {
    return http.patch(`/${id}`, data);
  }
}

export default new UsersDataService();
