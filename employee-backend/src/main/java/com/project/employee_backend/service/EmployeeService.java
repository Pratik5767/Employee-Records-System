package com.project.employee_backend.service;

import com.project.employee_backend.entity.Employee;

import java.util.List;

public interface EmployeeService {

    Employee postEmployee(Employee employee);

    List<Employee> getAllEmployees();

    void deleteEmployee(Long id);
}