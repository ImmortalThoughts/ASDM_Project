
package com.example.College.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.College.ModelResponce.Studentinfo;
import com.example.College.Service.StudentService;
@CrossOrigin("*")
@RestController
@RequestMapping("/College")
public class StudentController {
	@Autowired
	private StudentService studentService;

	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}
	@GetMapping("/getStudentData")
	public List<Studentinfo> getStudentData()
	{
		return this.studentService.getStudentData();
	}
	@PostMapping("/SaveSatudentInfo")
	public String updateAndSave(@RequestBody Studentinfo studentinfo )
	{
		return this.studentService.updateAndSave(studentinfo);
	}
	@PostMapping("/updateSatudentInfo")
	public String update(@RequestBody Studentinfo studentinfo )
	{
		return this.studentService.update(studentinfo);
	}
	@PostMapping("/deleteStudinfo")
	public String deleteStudinfo(@RequestBody Studentinfo studentinfo)
	{
		return this.studentService.deleteStudinfo(studentinfo);
	}
	

}
