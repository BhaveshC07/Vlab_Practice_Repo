
function draw_geometry(){
const g1=new Geometry(100,100);
g1.points.push({x:1,y:1});
g1.points.push({x:10,y:10});
g1.points.push({x:100,y:200});
g1.draw();
}

function draw_triangle(){
    const g1= new Triangle(100,100);
    g1.set_points(0,0,20,20,-50,60);
    g1.draw();
    }

    function draw_equi_triangle(){
        const g1= new Equi_triangle(100,100,100);
        
        g1.draw();
        }

        function draw_quadrilateral(){
            const g1= new Quadrilateral(100,100);
            g1.set_points(0,0,100,0,0,100,100,100);
            g1.draw();
            }

            function draw_rectangle(){
                const g1= new Rectangle(100,100,100,50);
                
                g1.draw();
                }
                function draw_square(){
                    const g1= new Square(100,100,100,);
                    
                    g1.draw();
                    }