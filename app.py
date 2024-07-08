# Incluir el framework Flask
import os
from flask import Flask

# importar la pantilla html. para guardar datos desde el formulario importamos request, redirect y session (variable de sesion)
from flask import render_template, request, redirect, session

# Importar el enlace a base de datos MySQL
from flaskext.mysql import MySQL

# Importar controlador del tiempo
from datetime import datetime

# Importar para obtener informacion de la imagen
from flask import send_from_directory

# Crear la aplicacion
app=Flask(__name__)

# Crear una llave secreta 
app.secret_key='JES'

# Crear una conexion a la de base de datos
mysql=MySQL()

app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']=''
app.config['MYSQL_DATABASE_DB']='sitio'

# Agregar el valor para inicializar nuestra aplicacion
mysql.init_app(app)
#-----------------------------------------------------

@app.route('/')
def Index():
    return render_template('index.html')

@app.route('/Home/estudiante/')
def e_home():
    return render_template('./estudiante/e-home.html')

@app.route('/estudiante/perfil/')
def e_perfil():
    return render_template('./estudiante/e-perfil.html')

@app.route('/estudiante/material/')
def e_material():
    return render_template('./estudiante/e-material_estudio.html')

@app.route('/estudiante/material/trabajo/')
def ver_materia():
    return render_template('./estudiante/e-ver_materias.html')

@app.route('/estudiante/refuerzo/libros')
def e_refuerzo_libros():
    return render_template('./estudiante/e-refuerzo-libros.html')

@app.route('/estudiante/refuerzo/videos')
def e_refuerzo_videos():
    return render_template('./estudiante/e-refuerzo-videos.html')

@app.route('/estudiante/libro/')
def e_libro():
    return render_template('./estudiante/e-libro-refuerzo.html')

# Admin

@app.route('/admin/home')
def a_home():
    return render_template('./admin/a-home.html')

@app.route('/admin/cursos')
def a_cursos():
    return render_template('./admin/a-curso.html')

@app.route('/admin/materias')
def a_materias():
    return render_template('./admin/a-materias.html')

@app.route('/admin/reportes')
def a_reportes():
    return render_template('./admin/a-reporte-curso.html')

@app.route('/admin/reportes-profesor')
def a_reportes_profesor():
    return render_template('./admin/a-reporte-profesor.html')

if __name__ == '__main__':
    app.run(port = 3000, debug=True)