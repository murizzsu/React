# Conditional Rendering
- digunakan untuk menampilkan halaman yang berbeda dengan menggunakan kondisi tertentu seperti and, or , if , dll
- contoh penggunaaan ada di file Auth layout
```
<p className='text-sm mt-5 text-center'>
                    {type === "login" ? " Don't have an account?" : "Already have an account?"}
                    {type == "login" && (<Link to='/register' className='font-bold text-blue-600'>Register</Link>)}
                    {type == "register" && (<Link to='/login' className='font-bold text-blue-600'>Login</Link>)}

                </p>
```

- Pengkondisian ternary digunakan ketika terdapat 2 kondisi

- Komponen bisa digunakan untuk pengkondisian
- jika komponen masih dalam 1 file yang sama (workspace) maka tidak perlu menggunakan export default. Cukup panggil fungsi seperti authlayout

-- contoh lainnya ```
const Navigation = ({ type }) => {
    if (type === "login") {
        return (
            <p className='text-sm mt-5 text-center'>
                Don't have an account? {" "}
                {type == "login" && (<Link to='/register' className='font-bold text-blue-600'>{" "}Register</Link>)}
            </p>
        )
    } else {
        return (
            <p className='text-sm mt-5 text-center'>
                Already have an account? {" "}
                {type == "register" && (<Link to='/login' className='font-bold text-blue-600'>{" "}Login</Link>)}
            </p>
        )
    }
}

```

