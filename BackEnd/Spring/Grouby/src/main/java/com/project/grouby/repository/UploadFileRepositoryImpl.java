package com.project.grouby.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.project.grouby.dto.UploadFile;

@Repository
public class UploadFileRepositoryImpl implements UploadFileRepository {
	private String ns = "com.project.grouby.uploadfilemapper.";
	
	@Autowired
	SqlSession session;
	
	@Override
	public int insert(List<UploadFile> uploadFiles) {
		int res = 0;
		
		for(int i=0; i<uploadFiles.size(); i++) {
			UploadFile uploadFile = uploadFiles.get(i);
			res = res + session.insert(ns + "insert", uploadFile);
		}
		
		return res;
	}
	
	@Override
	public List<UploadFile> selectByItemId(int itemId) {
		return session.selectList(ns + "selectByItemId", itemId);
	}
}
