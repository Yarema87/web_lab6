from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, resources={r"/catalog/*": {"origins": "http://localhost:3000"}})
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///car.db'
db = SQLAlchemy(app)

class CarObjects(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    max_speed = db.Column(db.Integer)
    power = db.Column(db.Integer)
    maker = db.Column(db.String(20))
    model = db.Column(db.String(50))
    price = db.Column(db.Integer)

@app.route('/catalog', methods=['GET'])
def get_all_cars():
    try:
        cars = CarObjects.query.all()
        car_list = []
        for car in cars:
            car_dict = {'max_speed': car.max_speed, 'power': car.power, 'model': car.model, 'maker': car.maker, 'price': car.price, 'id': car.id}
            car_list.append(car_dict)
        return jsonify(car_list)
    except Exception as e:
        return jsonify({'error': 'some error occurred during getting car on view', 'details': str(e)}), 500
    

@app.route('/catalog/filter/power', methods=['GET'])
def get_filtered_by_power():
    try:
        min_power = int(request.args.get('min_power', 0))
        max_power = int(request.args.get('max_power', float('inf')))
        
        cars = CarObjects.query.filter(CarObjects.power.between(min_power, max_power)).all()

        car_list = []
        for car in cars:
            car_dict = {'max_speed': car.max_speed, 'power': car.power, 'model': car.model, 'maker': car.maker, 'price': car.price, 'id': car.id}
            car_list.append(car_dict)

        return jsonify(car_list)
    except Exception as e:
        print('Error in get_filtered_by_power:', str(e))
        return jsonify({'error': 'some error occurred during getting car on view', 'details': str(e)}), 500


@app.route('/catalog/filter/speed', methods=['GET'])
def get_filtered_by_speed():
    try:
        min_speed_arg = int(request.args.get('min_speed', 0))
        max_speed_arg = int(request.args.get('max_speed', float('inf')))
        
        cars = CarObjects.query.filter(CarObjects.max_speed.between(min_speed_arg, max_speed_arg)).all()

        car_list = []
        for car in cars:
            car_dict = {'max_speed': car.max_speed, 'power': car.power, 'model': car.model, 'maker': car.maker, 'price': car.price, 'id': car.id}
            car_list.append(car_dict)

        return jsonify(car_list)
    except Exception as e:
        print('Error in get_filtered_by_speed:', str(e))
        return jsonify({'error': 'some error occurred during getting car on view', 'details': str(e)}), 500


@app.route('/catalog/filter/price', methods=['GET'])
def get_filtered_by_price():
    try:
        min_price = int(request.args.get('min_price', 0))
        max_price = int(request.args.get('max_price', float('inf')))
        
        cars = CarObjects.query.filter(CarObjects.price.between(min_price, max_price)).all()

        car_list = []
        for car in cars:
            car_dict = {'max_speed': car.max_speed, 'power': car.power, 'model': car.model, 'maker': car.maker, 'price': car.price, 'id': car.id}
            car_list.append(car_dict)

        return jsonify(car_list)
    except Exception as e:
        print('Error in get_filtered_by_price:', str(e))
        return jsonify({'error': 'some error occurred during getting car on view', 'details': str(e)}), 500


@app.route('/catalog', methods=['POST'])
def contain_cars():
    if request.method == 'POST':
        try:
            data = request.get_json()
            for car_data in data:
                model = car_data.get('model')
                existing_car = CarObjects.query.filter_by(model=model).first()

                if existing_car:
                    existing_car.max_speed = car_data['max_speed']
                    existing_car.power = car_data['power']
                    existing_car.maker = car_data['maker']
                    existing_car.price = car_data['price']
                else:
                    new_car = CarObjects(
                        max_speed=car_data['max_speed'],
                        power=car_data['power'],
                        model=car_data['model'],
                        maker=car_data['maker'],
                        price=car_data['price']
                    )
                    db.session.add(new_car)

            db.session.commit()
            return jsonify({'message': 'Cars added successfully'}), 200
        except Exception as e:
            print('Error in contain_cars:', str(e))
            return jsonify({'error': 'An error occurred during adding cars to the session', 'details': str(e)}), 500

if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.config['SESSION_TYPE'] = 'redis'
    app.app_context().push()
    try:
        db.create_all()
    except Exception as e:
        print(e)
    app.run(debug=True)
