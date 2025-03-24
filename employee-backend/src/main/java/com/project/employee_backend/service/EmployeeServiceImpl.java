package com.project.employee_backend.service;

import com.project.employee_backend.entity.Employee;
import com.project.employee_backend.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Override
    public Employee postEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public void deleteEmployee(Long id) {
        if (!employeeRepository.existsById(id)) {
            throw new EntityNotFoundException("Employee with the id " + id + " not found");
        }
        employeeRepository.deleteById(id);
    }

    @Override
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);

        if (optionalEmployee.isPresent()) {
            Employee existingEmp = optionalEmployee.get();

            existingEmp.setEmail(employee.getEmail());
            existingEmp.setName(employee.getName());
            existingEmp.setPhoneNo(employee.getPhoneNo());
            existingEmp.setDepartment(employee.getDepartment());

            return employeeRepository.save(existingEmp);
        }
        return null;
    }
}