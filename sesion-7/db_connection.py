import mysql.connector
from mysql.connector import Error

def create_connection():
    """Establecer la conexión a la base de datos MySQL"""
    connection = None
    try:
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="employees"
        )
        if connection.is_connected():
            print("Conexión exitosa a la base de datos MySQL")
    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
    return connection

def close_connection(connection):
    """Cerrar la conexión a la base de datos MySQL"""
    if connection.is_connected():
        connection.close()
        print("Conexión a MySQL cerrada")

if __name__ == "__main__":
    conn = create_connection()
    close_connection(conn)
