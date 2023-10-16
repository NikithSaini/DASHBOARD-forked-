import React from "react";
import Searchbar from "./Searchbar";
import Dropdown from "./dropdown";
import { Box, Paper } from "@mui/material";
import "./table.css";

function ProductTable() {
  return (
    <Paper elevation={1}>
      <Box>
        <table className="custom-table">
          <thead>
            <tr>
              <th>Product Sell</th>
              <th>
                <Searchbar />
              </th>
              <th>
                <Dropdown />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr colSpan="18">
              <td>Product Name</td>
              <td>Stock</td>
              <td>Total</td>
              <td>Sales</td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuDfWW1vWqWTRkQcDDp2MRwhj_e_yo4qDuJA&usqp=CAU"
                  alt="Product Image"
                  style={{ width: "40px", height: "40px", borderRadius: "20%" }}
                />
                <strong>Abstract 3D</strong> - 3D abstract art with vibrant
                colors.
              </td>
              <td>32 in stock</td>
              <td>$45.99</td>
              <td>20</td>
            </tr>
            <tr>
              <td>
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMRExMREREQERAREBAQEBEQEBAQEBAQFhIXFxYWFhYZHioiGRsnHBYWIzMjJystMDAwGCE2OzYvOiovMC0BCwsLDw4PGBERGy8eHh4vLy8vLS8vLy0tLy8vLy0vLS8vLy0vLy8vLy8vLy8vLy0vLy8vLS0vLy8vLy8vLy8vL//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EAEEQAAMAAQEFBAcFBgILAQAAAAABAgMRBAUSITFBUWGBBhMicZGh0TJCUrHBByNicrLhFLMzQ1Njc4KDkqLw8RX/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQFAQAG/8QANhEAAgIBAQUFBgUDBQAAAAAAAAECAxEEEhMhMUEiUWGx0TJxgZGh8AUjUsHhFDPxFUJicpL/2gAMAwEAAhEDEQA/AIsZtYxlYwixn2DmRR04vGMKsQacZnbNpjCtafPslfaoDabeEO3CisvgjLhJavRJdW+SRzdp3nK5Y1xP8T+z5d5z9u3hWV8+U9krp597FlRTCnrIjsuzwgsLv6jWXaar7Va/JfAxqClm0OylwQjdt8zepEijUngG0uCNTjXbzCpFSjakFs5sSZSRZjatZltdeXlq9Dk1tFJ8+p5LJ1144YOykb4TjTtIWM77G/JndnxO4S6HV4SnInG1V3hJ2x9yfxBcJBxlX1G9rn2/JDeywc7LtiquJzp05a6jez7fC66r/wB95DKu1PkbMNTpmvbXxyv2O3gg53pTXDhX8WRL/wAaf6IPi3xhX3n5Qzleke8ceaYmU1w3xt1otfZa0XPxPVQnvE2ng5qLqN1JRmm2ujz5HEVl8QLiI6LHbgzo0G3YrtGbQPOOr+ym/kviHw7uS53pT/D93z7wXOUuQMtivnz7uonuvY6qlkrlC101617vA7eOCShrDjO+wjlSldLL5LoCUE4Bv1ZTgHbLP6cU4AsYw6xhYxnnMF6fICMYRYxjhS6tL3tEeWF95eXP8hTm3yFypjHm0gHqyGv8Vj738GQ7mXcLxT+pfMfWM05SWraSXVvkkJbZvrHHKP3ld6+yvPt8jgbZt15Xrdarslckvcga6Zz58EX3auqvhHtPw5fP0Ort++0tZxc3+Nrkvcu08/myum3TdN9W+bM0zLZZGEa12TOnZZc8yfw6L78SmzUswGw4W+b5L5guTfBBbMYrMuBrHOoYtLsREg4xxzETsc+C4IpIJEkmQuOT0pDK6shccBZg1igPMCJTLIUCO3Y/3deC1+DOS5VLRo9FtuP93f8AJX5M89HQZTLKYrVVbLTEs+BzzXOfy95IyD1MSzY9Oa6dq7js1s8UIh2uD5h4sIqFMdBFQMbQnSMqyesBRq+SWrGcezfifkvqMU8iZwjHmDeR9FzK/wANddmi729B7HCXRJBEebYnafRCcbAu2m/dyDxs8LpK8+f5htC1IpRig3O2fNmStAqk1MBZCroM48Y/jx8gePGNzjJLrDc0mnwsg2jLQdwVwCNst3QltObgWva+SQjW2U+1rw6GPSLLpUSuyXT83ovyYnF6mhRBOCbMLXzlvXBPCQ2rNyxO8jSbS1aT0XexKtpyPqqnwpNfPoNaRn7tHc0KOH66+75ohzB7djbow2UQ7KY+NZVGZht6ILGLXwQzEpckBhyClNQ4LmDxYEuvN/IOUkaUhpJCcSm8srQtSEUm1JxyKa6jEyHxySJDxBNOZo1UhsUjMwZwyNTJNKZbCsXy4tZpd8tfI8pjXJHteE8dC0Xu5DNPZxYjV1cE/eCtC20PRPx0S+ITaNrS5T7VdmnP5dpjHsN2+LI+FfhXOn9CyTbi0YzlCMk+n3yF8Wr5JNvwH8OxPrT8l9RjFjmVpK0/N+82BCnHtHLdVKXCCwvqSJS5JaI0ZQSUN5CY1t8S5RuZLmQsoBsojQZUm1AVIviS7V8ANobuox9ppe8xMBYgx65GltSXZ8wXtdEMhdp485oaxQMKTnLeDX3Pmvoae9H+FfHUlnTZJ8EXQ/E9JBY2n/5foPOTPCIVvJ/hRh7xr+H4ALTW+HzC/wBX0ve/l/Jw985eLPfdLUr/AJVo/nqBljl7JDbp8Wrbb59rfMr/AA8ePxNWHZSXcYVt8bJOXHi2L8ZPWhawR4/EFWCO+vivoMyxOYmfXLw+BDPqcffXxX0Ic4neyaCRHa//AKVE/D8wmoqEdri+RTbPZ7MeZpBJRmUGhDJCIwKmQsyXMhogXKRXXUYUm1IRQbUiJzL6qiokLElTIeZJJzL668B8Uh0gWM4HpPv/ANXrixvStNLpdV/CvEVGLslhB3WwohtS+C739/Ie3vv6MGszpdrrz9mX4v8AQ8pPrM74m+CG29dOur7F+oDYdm49MmTo+cy+3xf0OpxGpRQorK/l/wAHzmq1dlzw+Xd0Xq/F/QmDDML2Vz7W+dP3sI6MallGEiRQb5hEWkYRtICUyiFJtBZRlI0BxYU7YV8Ob7gqZXEYSNpHMEs9RbPrheBTZDXCWpPZFKpswTQJwk4T2Q9ywehTCOTLR7IW5BsHTCUgNsNBbkzVC95S8lCuSgnLASpLyZwHG6566Sur+newOazn712vR+rT5RyfjXV/Pl5CbL1FZYxVckjoevxd1Px4lz+ZDewbnxVjirdcVSqenjzXy0IeTtayoi3KCeMnSLkiRuUUPgcjHLNwhiJMRIxjkTKRbXWaiQ8yVjkPMk8pl1dZmZNqQkyWpJ5SLIQMKQsopIIiaUiuMRfeu2+ow3k7UtJ/mfQ+a4G8+ZKucrW717Un+raXmep/aBtXDjxwu1035ckeW9HOmW/GI8vab/Qoo5wh+ri/cjD/ABGxysl/x4L3vn9+B3uM0mAmgsmq5mZCsMjSMyblCZWFUKjcoLJlcjUs7BZ4sVqbXD8uHPr6G0bSJMhok62SQqyZmQigJMBFAtyKY0glJagOoNqANofGgW4C3AxwGXJzaGKkWcGHI1Ug7kJSO7kTyCuQcyIUynds7uRXIJZWN5hPMLlYe3Qtpq0vE4u/MTnM393JpUvySr56/FHdwrnqXtuyTmnhrk09Yr8NfTvRydDtp4c85ESnsWcRnYttjgnV6NSk+T7ORDzjxZZ9l4stactYjil+56cyw1qGugh0xb5+R69IJElTIaJKZSG1wN45GsUg8cjGOSWcjRqrCxIaZKiQ8yTSkWwgUpL0NpF6CJSKYxB6FlsxqKbHI8J+0rJ7eJfw0cf0bf7q/wDjL+hHT/acvbwvvmji+jWT2M091Yq+KtfQbTPGogvD9mfOayPbs/7fud7ExmBbCN40aMpgV1hZQaJMQg0IRKZZCsxT5hsaF8dauv4acv8AT5DuGS5PsL3GM4bVks978wmOBmIJigZiBMpFtdJiYCTAaYNzAlyKo1AVBrgDqDXCBtDlULODLkYcmXJ7aC3Ys5BZJGqkXyo9tnd2I5EKZUPZEJZUC5nN2I5UJZh7MhDOhbmA4FY55G0i5ktSbFfCKRj2rMmzRDXCQYTnRmQ8SZmQ0SRzkatUDcSM40ChDONEk5GjXANjQWUYhB5RPKRVGJRTCGKFNjkgdGGzVsw2CGjxP7TsOuPDa+7kcvwTX10PJejOT95Uf7TFSX80tUvya8z6L6XbJ67Z6hfarVTr+LTin5yj5Vu/M8eSLXJzSfPv17Tknu7ap9PR4f0aMHWR/NtivB/Rfume1wD2JCuNLk5+zSVT7n2eXQcxIvnJpnaYqSTQxEjMIDjQzAhyLYQOFW0erz5O7Xmvek/1PRbJSpJy9UzyO8602jL/ADT/AESObt2+sb5c0+svozTqe1Wl4GFN7u6TfLL8z2OJDWORPd21xlWsvn2y+qOjEk83h4NSqMZRzHii5g2pCTJtSIcipQBKTTkJoVwguQagCcmKkM0DaObQWyL0hbOhuxXMC5HtkSyoRzD2YSzA7RxxEc4lpqxzOwGKQqe1YhFyxFlKS5kLwm4k2IyMeyBjhIG4SDsk+wdCZCzJJkLMmdORs1wNwg0IxCDSiaUi6EQkBkDkIidsoSLMUzbMUcCA2wVMJYK2eDSFN6LXG/By/n/c+Xek+weqzcc/YzN0v4b+8vjz8/A+p7StZpeH6nmN67Cs+Ksb5V9rG392l08ux+DKlRv9NKK9qLyvly+PngwfxR7rUwn0lHD+Dfqcn0e21VKx0/GW+x93uZ6LDJ872HK8daPVOW5pPsaejR7Ldm8tVpXNdnejlX59aa9pfUnqv3EsS9l/Q7eNDEC+z5VXRr3do1JPNSi8SWGbVUozjtQeV4Hjd+VptOX3x/lQDxZS/SN6bTk/6f8AlyJxZZp7cJGFqYfmS978zs7PtLlpptNdGuTR6ndXpGuU5v8AvS/NfQ8LGUPjzlr2LFiRNXOymW1W8eR9cwXNpVFKpfbL1QVSfL9g3peJ8WO3L7dOj966M9huv0ri9Jyrgr8XWX7+1EdumnHjHivr9+419P8AiVc+zZ2H9Pn0+J6BorQ1NppOWmn0aaaZlkWTVSMsFQRg7Z7J3ACxLIOZXyEsrBycwKZmIZmN5aEc9AtgsTzsvHHIy+bSGVJRperJrVkGpCzBqZDTBpRkZ86wfAQa4Chu0I3Y3EhJkuZCTJBKRrQiSUESKSNImkyqKNya1MIvUUORrUzRepi2eOg7YvTDWxa6OhxKyHE4dDrXQhlnqaOglhyRjfjlW1XCXc2vn/g8T6WbBwZFnlezkfDfhlS6+aXyYvsG0aHsNv2Sc0VirpS01/DS5p+TPBKKx3UUtKinNLxX6CNTB6e/bj7MuPx6+pjUy24bL5ry6Hqtk2vxOrh219/x5nk9mzHTw5jRrtjZHElkTKDi8xeH4PHkPbbu/Hnt5KeRW9E+FpLkklya8BatxT93LS/mhP8AJoPjzBpyhf09P6cAO27rLPvEP/xK7Mkv3y19SnujIulY350v0OmspPWhf08OgO+s6+RyHsWafuN+5y/yMeuqHpScvuaaO160lWqWlJNd1JNfA9uscme3rfNAt179yYX7FtLtl80/I9hu30nx5dFk/d1366y/p5nicu78b+zrD8Oc/B/USyxkxfaWs68qnnL+nmIupjL+4viivTauyr+2+H6Xy/j4H1x13c111A2zwO5/SK8Wi14o/A3193cev2DemPOtZeldsPqvqjOt08q+PNd/r948Te0uvrvxF9mXd3+59fPwD56EctDGahLLRMy1iuejn5qG81HP2i+QDAZeyzq2x1SB2KPZXjzG1JVTwiKlEmOA8wXigPMFcZE8oA+Ag1wlDNoTuzcyEUlpG0iOTL4xM6EZrQqhDKEUQy2TUEI1qYqinRimdCMZKFsjDWxbIzoxIFbMUtSro3g5p+8q00sTJfxKva078GhPJJ5v0p3dqltELnOk5Uu2ek15dH4adx6rPAu5T1TSaaaafRp9hpXVK6txfw8GfHNuqe0jwOz2dDDlB713a9nvRavHXPG3z075b718weKjJrlKtuMuDRZhTimuTOrjyB4yHOx2MTZoRtEyrHFkL4xVWa4xm8A3Y16wpZBbjJxnVYc3Y0sgWcv9+5rxEVZpZBimLdZW1bAn7WLSa/B0mv5e5+HQV2TbqiurmpfimmdCchjatmnL19nIl7N/kq7149nyFyhjjD5HU+kj0O7d+rJpOTRV2V2P3jmaj59OSsdOaTVS9Gmei3ZvXiSi34S3+TM62hTW1WuPd6GzpdfKPYueV0l6+vzH89iGTm0u9jO0UA2Sdb17l8zO5s1+Z1cU8g+ODGORrDJVF4CkgmOA0QXjkPEDVIRKIPgIMcHgQPaF7CMJGkjSRNCeTKoow0ZoIwdixqQJsw2XTMNngi2zFUU2ZbOhoxdC2VhrYrlYSGxQHIw27nq6XuYploNuu/b075a/X9BsODQOohtUyXgM7RAlcnWzwc/JBq1Tyj43V1cRHa9lnLDi1yfauqfY14nk9r2KsNcF++aXSl3/ANj2nCC2zZZyy4tcuxrrL70L1GnVvFe0iKq51Sw+R4+GGmje2bBeF6Vzl/ZtdH9H4AEzOUnF4lwZorEllcg6oviBJl6jVYe2AvEa4wGpeoSsBcAyo0qAalqhkbAHAYmwsWKKgk0PjMTKAfa9nWZaaqbX2Lf9NeH5HHjJUU5pOal6NPsZ1YsxvDZfXTrP+lhcv95C+7712fDuAuh/vhz6+IMJY4Pl5Dmw7ZxzwN+1919/h7+46W645N97+S5fU8Zsu0aHr9ybesns19vsf4v7kVtas/Mjz6+vr8zW0Gp3clVPl08H3e59O7kdvGh3DIrhQ/ikmTNxoNjkNMlY5GIkNMW4meAgxw+BAtoHZE0iNEILY1FMBZCAhgKB0yEPBIw2YplECQxArYplZCBobFCuRl7vyaZY8a0+Ka/UhAg5eyz0WWBDNBCFtLPltVFcRapMaFkLEYNqWTGSFSc0k0+qfNM4G8t0PHrcc4XNpvnP1XzLII1FcZwbfNAaeyUJpLqcpMvUhDHTZuYL1K1IQNNnMFamkyEGRbFtGlRpUQhTFsTJG5oYx2UQpg2TyQjvjZf9fHJOksk9NLabVL36PXxXiC2HaHLTT0aeqIQjn2LuzwzxDh2ocfcfQdybWs0J9KXKl4nawohCe+KjY0j6TQWSs08ZSeXxXyeBzGhiJLIKKmEIQgQJ/9k="
                  alt="Product Image"
                  style={{ width: "40px", height: "40px", borderRadius: "20%" }}
                />
                <strong>Sarphens illustration</strong> - Illustrated artwork by
                Sarphens.
              </td>
              <td>32 in stock</td>
              <td>$45.99</td>
              <td>20</td>
            </tr>
            {/* You can add more rows with product information here */}
          </tbody>
        </table>
      </Box>
    </Paper>
  );
}

export default ProductTable;
