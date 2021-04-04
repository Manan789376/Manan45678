const express =require('express');
const router =express.Router();
const multer =require('multer');
const EmployeesController =require('../controllers/employees');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, Date.now()+file.originalname.replace(/\s+/g, '-'));
    }
  });
  const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
  });
router.get("/", EmployeesController.employees_get_all);

router.post("/", EmployeesController.employees_create_employee);

router.get("/:employeeId", EmployeesController.employees_get_employee);

router.patch("/:employeeId",  EmployeesController.employees_update_employee);

router.delete("/:employeeId", EmployeesController.employees_delete);

module.exports=Router;
