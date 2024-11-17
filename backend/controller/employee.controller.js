import Employee from '../model/employee.model.js';

// Register a new employee
export const registerEmployee = async (req, res) => {
  try {
    const { companyNumber, name, address, gender, phoneNumber, dateOfBirth, section } = req.body;

    // Validate input
    if (!companyNumber || !name || !address || !gender || !phoneNumber || !dateOfBirth || !section) {
      return res.status(400).json({ success: false, message: 'All fields are required, including section' });
    }

    // Create a new employee
    const employee = new Employee({ companyNumber, name, address, gender, phoneNumber, dateOfBirth, section });
    await employee.save();

    res.status(201).json({ success: true, message: 'Employee registered successfully', data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
