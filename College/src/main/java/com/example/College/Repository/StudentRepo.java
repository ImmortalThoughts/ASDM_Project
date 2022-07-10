package com.example.College.Repository;


import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.College.ModelResponce.Studentinfo;

@Repository
@Transactional
public interface StudentRepo extends JpaRepository<Studentinfo, String>{

	
}
