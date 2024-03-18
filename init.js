// Define queries that establish database
const initial_queries = 
[    
    // use myDataBase
    // db.createCollection("students")
    {
        query: db.students.drop()
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 100,
                        full_name: "malek",
                        address: "cairo",
                        birthdate: new Date("1999-04-04"),
                        mobile: "823456",
                        father:
                        {
                            full_name: "said",
                            job: "teacher",
                            mobile: "535642"
                        },
                        mother:
                        {
                            full_name: "aml",
                            job: "doctor",
                            mobile: "192654"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE271",
                        name: "Robotics",
                        instructors:
                        {
                            code: 98982,
                            full_name: "Hady",
                            mobile: "224422"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 85,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 90,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            },
                            {
                                code: "CSE201",
                                name: "Data Structures and Algorithms",
                                total: 88,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2022"
                            }
                        ]
                }
            )
    },

    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 112,
                        full_name: "Ahmed",
                        address: "cairo",
                        birthdate: new Date("2000-02-23"),
                        mobile: "123456",
                        father:
                        {
                            full_name: "zein",
                            job: "engineer",
                            mobile: "135642"
                        },
                        mother:
                        {
                            full_name: "mona",
                            job: "doctor",
                            mobile: "132654"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE271",
                        name: "Robotics",
                        instructors:
                        {
                            code: 98982,
                            full_name: "Hady",
                            mobile: "224422"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 85,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 90,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            },
                            {
                                code: "CSE201",
                                name: "Data Structures and Algorithms",
                                total: 88,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2022"
                            }
                        ]
                }
            )
    },

    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 101,
                        full_name: "Sarah",
                        address: "New York",
                        birthdate: new Date("2001-07-15"),
                        mobile: "987654",
                        father:
                        {
                            full_name: "John",
                            job: "Lawyer",
                            mobile: "654321"
                        },
                        mother:
                        {
                            full_name: "Emily",
                            job: "Teacher",
                            mobile: "789456"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE272",
                        name: "Artificial Intelligence",
                        instructors:
                        {
                            code: 45678,
                            full_name: "Jessica",
                            mobile: "987654"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 92,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2022"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 88,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2023"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 102,
                        full_name: "John",
                        address: "London",
                        birthdate: new Date("2002-05-10"),
                        mobile: "876543",
                        father:
                        {
                            full_name: "Robert",
                            job: "Architect",
                            mobile: "234567"
                        },
                        mother:
                        {
                            full_name: "Sophia",
                            job: "Nurse",
                            mobile: "987654"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE273",
                        name: "Database Systems",
                        instructors:
                        {
                            code: 12345,
                            full_name: "David",
                            mobile: "876543"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 90,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 85,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 103,
                        full_name: "Emily",
                        address: "Paris",
                        birthdate: new Date("2003-09-20"),
                        mobile: "765432",
                        father:
                        {
                            full_name: "Michael",
                            job: "Professor",
                            mobile: "876543"
                        },
                        mother:
                        {
                            full_name: "Olivia",
                            job: "Engineer",
                            mobile: "123456"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE274",
                        name: "Machine Learning",
                        instructors:
                        {
                            code: 56789,
                            full_name: "Sophia",
                            mobile: "765432"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 88,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 92,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 104,
                        full_name: "David",
                        address: "Berlin",
                        birthdate: new Date("2004-01-12"),
                        mobile: "654321",
                        father:
                        {
                            full_name: "Thomas",
                            job: "Manager",
                            mobile: "987654"
                        },
                        mother:
                        {
                            full_name: "Emma",
                            job: "Designer",
                            mobile: "234567"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE275",
                        name: "Computer Networks",
                        instructors:
                        {
                            code: 54321,
                            full_name: "Sophie",
                            mobile: "654321"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 60,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 80,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 105,
                        full_name: "Sophia",
                        address: "Tokyo",
                        birthdate: new Date("2005-03-05"),
                        mobile: "543210",
                        father:
                        {
                            full_name: "Daniel",
                            job: "Banker",
                            mobile: "876543"
                        },
                        mother:
                        {
                            full_name: "Ava",
                            job: "Artist",
                            mobile: "765432"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE276",
                        name: "Operating Systems",
                        instructors:
                        {
                            code: 43210,
                            full_name: "Oliver",
                            mobile: "543210"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 90,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 92,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },

    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 106,
                        full_name: "Michael",
                        address: "Sydney",
                        birthdate: new Date("2006-11-30"),
                        mobile: "987654",
                        father:
                        {
                            full_name: "Christopher",
                            job: "Businessman",
                            mobile: "123456"
                        },
                        mother:
                        {
                            full_name: "Isabella",
                            job: "Accountant",
                            mobile: "789456"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE277",
                        name: "Computer Vision",
                        instructors:
                        {
                            code: 67890,
                            full_name: "Emily",
                            mobile: "987654"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 88,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 90,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 107,
                        full_name: "Oliver",
                        address: "Toronto",
                        birthdate: new Date("2007-09-25"),
                        mobile: "876543",
                        father:
                        {
                            full_name: "William",
                            job: "Engineer",
                            mobile: "234567"
                        },
                        mother:
                        {
                            full_name: "Mia",
                            job: "Architect",
                            mobile: "987654"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE278",
                        name: "Web Development",
                        instructors:
                        {
                            code: 78901,
                            full_name: "Liam",
                            mobile: "876543"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 90,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 85,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 108,
                        full_name: "William",
                        address: "Melbourne",
                        birthdate: new Date("2008-02-14"),
                        mobile: "765432",
                        father:
                        {
                            full_name: "James",
                            job: "Doctor",
                            mobile: "876543"
                        },
                        mother:
                        {
                            full_name: "Charlotte",
                            job: "Lawyer",
                            mobile: "123456"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE279",
                        name: "Image Processing",
                        instructors:
                        {
                            code: 89012,
                            full_name: "Noah",
                            mobile: "765432"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 92,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 88,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 109,
                        full_name: "khaled",
                        address: "Egypt",
                        birthdate: new Date("2009-02-10"),
                        mobile: "765735",
                        father:
                        {
                            full_name: "Hassan Said Hassan",
                            job: "Doctor",
                            mobile: "876773"
                        },
                        mother:
                        {
                            full_name: "Shahid",
                            job: "Lawyer",
                            mobile: "127756"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE280",
                        name: "Deep Learing",
                        instructors:
                        {
                            code: 89012,
                            full_name: "Noah",
                            mobile: "765432"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 98,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 89,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 110,
                        full_name: "Ali",
                        address: "Giza",
                        birthdate: new Date("2010-07-10"),
                        mobile: "775735",
                        father:
                        {
                            full_name: "Said Ahmed",
                            job: "Doctor",
                            mobile: "876777"
                        },
                        mother:
                        {
                            full_name: "Sara",
                            job: "Lawyer",
                            mobile: "127799"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE281",
                        name: "Verification",
                        instructors:
                        {
                            code: 89012,
                            full_name: "Noah",
                            mobile: "765432"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 98,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 89,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    },
    {
        query:
            db.students.insert(
                {
                    personal_info:
                    {
                        code: 111,
                        full_name: "Tarek",
                        address: "Cairo",
                        birthdate: new Date("2011-07-01"),
                        mobile: "775735",
                        father:
                        {
                            full_name: "hamed Said",
                            job: "Doctor",
                            mobile: "776777"
                        },
                        mother:
                        {
                            full_name: "Sara",
                            job: "Lawyer",
                            mobile: "427799"
                        }
                    },
                    registered_courses:
                    {
                        code: "CSE282",
                        name: "Quatum Computing",
                        instructors:
                        {
                            code: 89012,
                            full_name: "Noah",
                            mobile: "765432"
                        }
                    },
                    historical_results:
                        [
                            {
                                code: "CSE101",
                                name: "Introduction to Computer Science",
                                total: 98,
                                max_total: 130,
                                credit_hours: 3,
                                semester_name: "Fall 2021"
                            },
                            {
                                code: "CSE102",
                                name: "Object-Oriented Programming",
                                total: 40,
                                max_total: 100,
                                credit_hours: 3,
                                semester_name: "Spring 2022"
                            }
                        ]
                }
            )
    }
];


// Clear the console
print("\x1Bc");


// Execute the queries
var init_counter = 0;
initial_queries.forEach(({ query }) => {
    const cursor = query;
    init_counter++;

    if (typeof query === 'object' && typeof query.forEach === 'function') 
    {
        query.forEach(doc => {
            printjson(doc);
        });
    } 
    else
    {
        //print("Query result does not return a cursor. Printing the result:");
        //printjson(query);
    }

    print("--------------"+ init_counter +"---------------");
});
