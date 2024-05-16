
import React from 'react'

const Footer = () => {
    return (
        <div>
            <section>
                <footer class="bg-body-tertiary text-center">
                    <div class="container p-4 pb-0">
                        <section class="">
                            <form action="">
                                <div class="row d-flex justify-content-center">
                                    <div class="col-auto">
                                        <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                        </p>
                                    </div>
                                    <div class="col-md-5 col-12">
                                        
                                        <div data-mdb-input-init class="form-outline mb-4">
                                        <input type="email" id="form5Example26" class="form-control" />
                                        <label class="form-label" for="form5Example26">Email address</label>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                    
                                        <button data-mdb-ripple-init type="submit" class="btn btn-primary mb-4">
                                        Subscribe
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                    <div class="text-center p-3">
                        © {new Date().getFullYear()} Copyright
                    </div> 
                </footer>
            </section>
        </div>
    )
}

export default Footer;
