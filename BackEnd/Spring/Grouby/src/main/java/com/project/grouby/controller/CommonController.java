package com.project.grouby.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.io.IOUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin("*")
@RequestMapping("/common")
public class CommonController {
	
	private final String UPLOAD_PATH = "F:\\uploadTest";
	
	@GetMapping("/getImageFile/{fileName}")
	public ResponseEntity<byte[]> getImageFile(@PathVariable String fileName) {
		
		try {
			System.out.println("fileName=" + fileName);
			
			InputStream fileStream = new FileInputStream(UPLOAD_PATH + "\\" + fileName + ".jpg");
			System.out.println("fileStream=" + fileStream);
			
			byte[] fileByteArray = IOUtils.toByteArray(fileStream);
			fileStream.close();
			
			System.out.println("fileByteArray=" + fileByteArray);
			
			return new ResponseEntity<byte[]>(fileByteArray, HttpStatus.OK);
			
		} catch(IOException e) {
			return new ResponseEntity<byte[]>(new byte[] {}, HttpStatus.CONFLICT);
		}
	}
	
	@PostMapping("/uploadFiles")
	public ResponseEntity<Map<String, Object>> uploadFiles(MultipartFile[] uploadFiles) {
		try {
			System.out.println(uploadFiles);
			
			for(int i=0; i<uploadFiles.length; i++) {
				MultipartFile file = uploadFiles[i];
				
				System.out.println(file.getOriginalFilename());
				System.out.println(file.getSize());
				System.out.println(new Date().getTime());
				
				File fileSave = new File(UPLOAD_PATH, file.getOriginalFilename());
				file.transferTo(fileSave);
			}
			
			return response(1, true, HttpStatus.OK);
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
