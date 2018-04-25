from setuptools import setup

exec (open('grasia_dash_components/version.py').read())

setup(
    name='grasia_dash_components',
    version=__version__,
    author="Abel 'Akronix' Serrano Juste",
    author_email='akronix5@gmail.com',
    packages=['grasia_dash_components'],
    keywords='dash react-components grasia',
    include_package_data=True,
    license='MIT',
    description='Extended dash UI component suite for @GRASIA.',
    url='https://github.com/Grasia/grasia-dash-components',
    python_requires='>=3',
    install_requires=['dash', 'dash-renderer']
)
