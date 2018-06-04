from setuptools import setup

exec (open('grasia_dash_components/version.py').read())

long_description = """grasia-dash-components is a third party extension of the [Dash](https://pypi.org/project/dash/)
components suite. It adds new components or extends the default ones.

This is a list of the currently available components:
* Accordion: A list of items that can be collapsed (folded) or un-collapsed (unfolded).
* Card: A component for framing content that can contain an image, text, etcetera.
* Import: A component to import external javascript libraries into your web app.
* LoadingDialog: A loading Dialog/Popup.
* Tabs: An extension of the [[WIP] Dash component](https://github.com/plotly/dash-core-components/pull/74) that supports embbebing icons in the tabs as well as other improvements.

To use it, simply install it from pip: `pip install grasia-dash-components`
and import it with `import grasia_dash_components`.

We use this suite for our projects.
 But we have this suite [open-sourced](https://github.com/Grasia/grasia-dash-components)
 and we try to keep it well maintained."""

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
    long_description=long_description,
    long_description_content_type="text/markdown",
    url='https://github.com/Grasia/grasia-dash-components',
    python_requires='>=3',
    install_requires=['dash', 'dash-renderer']
)
