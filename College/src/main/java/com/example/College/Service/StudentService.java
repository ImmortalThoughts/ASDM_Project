package com.example.College.Service;

import java.util.List;

import com.example.College.ModelResponce.Studentinfo;

public interface StudentService {

	List<Studentinfo> getStudentData();
    String updateAndSave(Studentinfo studentinfo);
	String deleteStudinfo(Studentinfo studentinfo);
	String update(Studentinfo studentinfo);
}
