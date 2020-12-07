package com.project.grouby.jwt;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class JwtInterceptor implements HandlerInterceptor {
	
	@Autowired
	private JwtService jwtService;
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		
		if(request.getMethod().equals("OPTIONS")) { // OPTIONS�� ���� ��û�� �� ��û�� �޼��� ȣ���ϱ� ������ OPTIONS�� true���Ͽ� �����Ű��
			return true;
		} else {
			String token = request.getHeader("user-token");
			System.out.println("SCTEST__" + token);
			if(token != null && token.length() > 0) {
				jwtService.checkValid(token);
				return true;
			} else {
				throw new RuntimeException("������ū�� ����Ǿ����ϴ�.");
			}
		}
	}
}
