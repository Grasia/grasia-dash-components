import grasia_dash_components
import dash
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True

card_data = [
    {'label': 'Contributors', 'data': '2 000 000'},
    {'label': 'Editions', 'data': '90 000 000'},
    {'label': 'Pages', 'data': ' 200 000'}
    ]

card_style = {'backgroundColor': '#004481',
              'color': 'white',
              'border': '1px lightgrey solid'}

app.layout = html.Div([
    html.H2('Card with image'),
    grasia_dash_components.Card(
        id='test-card',
        img='https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png',
        data=card_data,
        style=card_style,
        url="https://www.wikipedia.org/",
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quam mi, vehicula mollis libero at, congue tristique purus. Vivamus rhoncus tincidunt luctus.'
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
