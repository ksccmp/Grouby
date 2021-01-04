package com.project.grouby.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.grouby.dto.UploadFile;
import com.project.grouby.repository.UploadFileRepository;

@Service
public class UploadFileServiceImpl implements UploadFileService {
	
	@Autowired
	UploadFileRepository uploadFileRepo;
	
	@Override
	@Transactional
	public int insert(List<UploadFile> uploadFiles) {
		return uploadFileRepo.insert(uploadFiles);
	}
	
	@Override
	public List<UploadFile> selectByItemId(int itemId) {
		return uploadFileRepo.selectByItemId(itemId);
	}
}
