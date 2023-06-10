# Use the official PHP image as the base image
FROM php:8.0.2-apache

# Set the working directory
WORKDIR /var/www/html

# Install dependencies and enable necessary Apache modules
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip
RUN docker-php-ext-install zip



# Copy composer files and install dependencies
COPY composer.json composer.lock ./
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-scripts

# Copy the rest of the application
COPY . .

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage

# Expose the container's port
EXPOSE 80

# Start the Apache server
CMD ["apache2-foreground"]
