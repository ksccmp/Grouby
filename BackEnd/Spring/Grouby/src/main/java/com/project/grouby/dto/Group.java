package com.project.grouby.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Group {
	private int groupId;
	private String groupName;
	private String regId;
	private String regDate;
	private String modDate;
	
	private List<GroupMember> groupMembers;
}
