from flask import Flask, request, jsonify
from queries import fetch_all_employees, create_employee, update_employee, delete_employee

app = Flask(__name__)

@app.route('/api/employees', methods=['GET'])
def get_employees():
    employees = fetch_all_employees()
    return jsonify(employees)

@app.route('/api/employees', methods=['POST'])
def add_employee():
    data = request.get_json()
    create_employee(data['first_name'], data['last_name'], data['email'], data['hire_date'], data['salary'])
    return jsonify({"message": "Empleado creado exitosamente"}), 201

@app.route('/api/employees/<int:employee_id>', methods=['PUT'])
def edit_employee(employee_id):
    data = request.get_json()
    update_employee(employee_id, data['first_name'], data['last_name'], data['email'], data['salary'])
    return jsonify({"message": "Empleado actualizado exitosamente"})

@app.route('/api/employees/<int:employee_id>', methods=['DELETE'])
def remove_employee(employee_id):
    delete_employee(employee_id)
    return jsonify({"message": "Empleado eliminado exitosamente"})

if __name__ == '__main__':
    app.run(debug=True)
