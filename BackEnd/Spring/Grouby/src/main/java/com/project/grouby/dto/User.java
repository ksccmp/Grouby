package com.project.grouby.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
	private String userId;
	private String userName;
	private String userPassword;
	private String userPhone;
	private String regDate;
	private String modDate;
}
