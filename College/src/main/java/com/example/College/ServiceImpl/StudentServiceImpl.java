package com.example.College.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.College.ModelResponce.Studentinfo;
import com.example.College.Repository.StudentRepo;
import com.example.College.Service.StudentService;

@Service
public class StudentServiceImpl implements StudentService{
@Autowired 
private StudentRepo studentRepo;

	@Override
	public List<Studentinfo> getStudentData() {
		return studentRepo.findAll();
	}
    @Override
    public String updateAndSave(Studentinfo studentinfo) {
    	List<Studentinfo> allData=studentRepo.findAll();
    	for(Studentinfo getData:allData) {
    	if(studentinfo.getPRNNumber().equalsIgnoreCase(getData.getPRNNumber()))
    	{
    		return "Failure";
    	}
    	}
    	studentRepo.save(studentinfo);
		return "Success";
		
    }
	@Override
	public String deleteStudinfo(Studentinfo studentinfo) {
		String prn=studentinfo.getPRNNumber();
		studentRepo.deleteById(prn);
		return "Deleted";
	}
	@Override
	public String update(Studentinfo studentinfo) {
       studentRepo.save(studentinfo);
		return "Updated";
		
	}
	
	
	
	
	
}
