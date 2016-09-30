var Schema = {
    users: {
        firstName: {type: 'string', nullable: false, primary: true},
        lastName: {type: 'string', maxlength: 50, nullable: true},
        email: {type: 'string', maxlength: 100, nullable: false},
        gender: {type: 'string', maxlength: 20, nullable: false},
        ipAddress: {type: 'string', maxlength: 20, nullable: true}
    },
    sales: {
        id: {type: 'integer', nullable: false, primary: true},
        cost: {type: 'decimal', maxlength: 20, nullable: true},
        sales: {type: 'decimal', maxlength: 20, nullable: true},
        item: {type: 'string', maxlength: 50, nullable: true}
    }
};

module.exports = Schema
