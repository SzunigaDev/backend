from db_connection import create_connection, close_connection

def fetch_all_employees():
    """Obtener todos los empleados"""
    connection = create_connection()
    employees = []
    if connection:
        cursor = connection.cursor(dictionary=True)
        cursor.execute("SELECT * FROM employees")
        employees = cursor.fetchall()
        cursor.close()
        close_connection(connection)
    return employees

def create_employee(first_name, last_name, email, hire_date, salary):
    """Crear un nuevo empleado"""
    connection = create_connection()
    if connection:
        cursor = connection.cursor()
        query = """
        INSERT INTO employees (first_name, last_name, email, hire_date, salary)
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (first_name, last_name, email, hire_date, salary))
        connection.commit()
        cursor.close()
        close_connection(connection)
        print("Empleado creado exitosamente")

def update_employee(employee_id, first_name, last_name, email, salary):
    """Actualizar un empleado"""
    connection = create_connection()
    if connection:
        cursor = connection.cursor()
        query = """
        UPDATE employees
        SET first_name = %s, last_name = %s, email = %s, salary = %s
        WHERE id = %s
        """
        cursor.execute(query, (first_name, last_name, email, salary, employee_id))
        connection.commit()
        cursor.close()
        close_connection(connection)
        print("Empleado actualizado exitosamente")

def delete_employee(employee_id):
    """Eliminar un empleado"""
    connection = create_connection()
    if connection:
        cursor = connection.cursor()
        query = "DELETE FROM employees WHERE id = %s"
        cursor.execute(query, (employee_id,))
        connection.commit()
        cursor.close()
        close_connection(connection)
        print("Empleado eliminado exitosamente")

# Ejemplo de uso
if __name__ == "__main__":
    # Obtener todos los empleados
    employees = fetch_all_employees()
    print("Empleados:", employees)
    
    # Crear un nuevo empleado
    create_employee("Carlos", "Hernandez", "carlos.hernandez@example.com", "2023-01-01", 55000)
    
    # Actualizar un empleado existente
    update_employee(1, "Juan", "Perez", "juan.perez@example.com", 60000)
    
    # Eliminar un empleado
    delete_employee(2)
