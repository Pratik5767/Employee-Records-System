package com.project.employee_backend.service;

import com.project.employee_backend.entity.Employee;
import com.project.employee_backend.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}