package com.project.grouby.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.project.grouby.jwt.JwtInterceptor;

@Configuration
@EnableWebMvc
@ComponentScan(basePackages = {"com.project.grouby.controller", "com.project.grouby.config", "com.project.grouby.jwt"})
public class ServletContext implements WebMvcConfigurer {
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
	    registry.addResourceHandler("swagger-ui.html").addResourceLocations("classpath:/META-INF/resources/"); // swagger 등록
	    registry.addResourceHandler("/webjars/**").addResourceLocations("classpath:/META-INF/resources/webjars/"); // swagger 등록
	    registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}
	
	@Bean
	public MultipartResolver multipartResolver() throws Exception {
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
		multipartResolver.setMaxUploadSize(2000000000);
		multipartResolver.setDefaultEncoding("UTF-8");
		
		return multipartResolver;
	}
	
	@Autowired
	private JwtInterceptor jwtInterceptor;
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**")
          		.allowedOrigins("*")
          		.allowedMethods("*")
          		.allowedHeaders("*")
          		.exposedHeaders("user-token");
	}
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(jwtInterceptor)
				.addPathPatterns("/**")
				.excludePathPatterns(new String[] {
						"/user/notsign/**",
						"/common/getImageFile/**",
						"/v2/api-docs",
						"/swagger-resources/**",
						"/swagger-ui.html/**",
						"/webjars/**",
						"/item/test/**",
				});
	}
}
