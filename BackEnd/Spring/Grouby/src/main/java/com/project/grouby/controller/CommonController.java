package com.project.grouby.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.project.grouby.dto.UploadFile;
import com.project.grouby.service.UploadFileService;

@RestController
@CrossOrigin("*")
@RequestMapping("/common")
public class CommonController {
	
	private final String UPLOAD_PATH = "F:\\groubyUpload";
	
	@Autowired
	UploadFileService uploadFileServ;
	
	@GetMapping("/getImageFile/{fileId}/{fileType}")
	public ResponseEntity<byte[]> getImageFile(@PathVariable String fileId, @PathVariable String fileType) {
		
		try {
			InputStream fileStream = new FileInputStream(UPLOAD_PATH + "\\" + fileId + "." + fileType);
			
			byte[] fileByteArray = IOUtils.toByteArray(fileStream);
			fileStream.close();
			
			
			return new ResponseEntity<byte[]>(fileByteArray, HttpStatus.OK);
			
		} catch(IOException e) {
			return new ResponseEntity<byte[]>(new byte[] {}, HttpStatus.CONFLICT);
		}
	}
	
	@PostMapping("/uploadFiles")
	public ResponseEntity<Map<String, Object>> uploadFiles(MultipartFile[] multipartFiles, String stringItemId) {
		try {
			int itemId = Integer.valueOf(stringItemId);
			List<UploadFile> uploadFiles = new ArrayList<UploadFile>();
			
			for(int i=0; i<multipartFiles.length; i++) {
				MultipartFile file = multipartFiles[i];
				String fileId = (new Date().getTime()) + "" + (new Random().ints(1000, 9999).findAny().getAsInt());
				String originName = file.getOriginalFilename(); // 사진파일.jpg
				String fileType = originName.substring(originName.lastIndexOf(".") + 1); // jpg
				originName = originName.substring(0, originName.lastIndexOf(".")); // 사진파일
				
				File fileSave = new File(UPLOAD_PATH, fileId + "." + fileType); // fileId.jpg
				file.transferTo(fileSave);
				
				UploadFile uploadFile = new UploadFile(itemId, fileId, originName, file.getSize(), fileType);
				uploadFiles.add(uploadFile);
			}
			
			return response(uploadFileServ.insert(uploadFiles), true, HttpStatus.OK);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return response(0, false, HttpStatus.CONFLICT);
	}
	
	public ResponseEntity<Map<String, Object>> response(Object data, boolean success, HttpStatus status) {
		Map<String, Object> resMap = new HashMap<String, Object>();
		resMap.put("data", data);
		resMap.put("success", success);
		
		return new ResponseEntity<Map<String,Object>>(resMap, status);
	}
}
