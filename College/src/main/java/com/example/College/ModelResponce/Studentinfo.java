package com.example.College.ModelResponce;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Student_info")
public class Studentinfo {
@Id
private String PRNNumber;
private String StudentName;
private String Address;
private String Field;
private String PhoneNumber;
private String RollNo;
public String getPRNNumber() {
	return PRNNumber;
}
public void setPRNNumber(String pRNNumber) {
	PRNNumber = pRNNumber;
}
public String getStudentName() {
	return StudentName;
}
public void setStudentName(String studentName) {
	StudentName = studentName;
}
public String getAddress() {
	return Address;
}
public void setAddress(String address) {
	Address = address;
}
public String getField() {
	return Field;
}
public void setField(String field) {
	Field = field;
}
public String getPhoneNumber() {
	return PhoneNumber;
}
public void setPhoneNumber(String phoneNumber) {
	PhoneNumber = phoneNumber;
}
public String getRollNo() {
	return RollNo;
}
public void setRollNo(String rollNo) {
	RollNo = rollNo;
}
public Studentinfo(String pRNNumber, String studentName, String address, String field, String phoneNumber,
		String rollNo) {
	super();
	PRNNumber = pRNNumber;
	StudentName = studentName;
	Address = address;
	Field = field;
	PhoneNumber = phoneNumber;
	RollNo = rollNo;
}
public Studentinfo() {
	
}






}
