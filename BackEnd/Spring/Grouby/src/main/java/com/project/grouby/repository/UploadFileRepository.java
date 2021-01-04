package com.project.grouby.repository;

import java.util.List;

import com.project.grouby.dto.UploadFile;

public interface UploadFileRepository {
	
	public int insert(List<UploadFile> uploadFiles);
	
	public List<UploadFile> selectByItemId(int itemId);
}
