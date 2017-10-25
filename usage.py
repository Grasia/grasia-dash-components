import grasia_dash_components
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

app.layout = html.Div([
    grasia_dash_components.Card(
        id='test-card',
        img='https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png'
    ),
])

if __name__ == '__main__':
    app.run_server(debug=True)
